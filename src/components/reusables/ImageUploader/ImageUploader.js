import React from "react";

const ImageUploader = ({ image, setImage }) => {
 const handleFileChange = async (e) => {
   const file = e.target.files[0];
   if (!file) return;

   // Check file type silently
   if (!file.type.match(/image\/(png|jpeg|jpg)/)) {
     return; // Ignore invalid file types
   }

   // Resize and compress image, even if it exceeds 2MB initially
   try {
     const resizedImage = await resizeImage(file, 500, 500);
     setImage(resizedImage); // Update the image via props
   } catch (err) {
     console.error("Failed to process the image:", err); // Log error silently
   }
 };

 const resizeImage = (file, maxWidth, maxHeight) => {
   return new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.onload = (event) => {
       const img = new Image();
       img.onload = () => {
         const canvas = document.createElement("canvas");
         const ctx = canvas.getContext("2d");

         let width = img.width;
         let height = img.height;

         // Scale down while maintaining aspect ratio
         if (width > maxWidth || height > maxHeight) {
           const scale = Math.min(maxWidth / width, maxHeight / height);
           width = Math.round(width * scale);
           height = Math.round(height * scale);
         }

         canvas.width = width;
         canvas.height = height;

         ctx.drawImage(img, 0, 0, width, height);

         canvas.toBlob(
           (blob) => {
             if (!blob) {
               reject(new Error("Failed to resize image."));
               return;
             }

             compressImage(blob, 2 * 1024 * 1024)
               .then((compressedBlob) => {
                 resolve(URL.createObjectURL(compressedBlob));
               })
               .catch((err) => reject(err));
           },
           file.type,
           0.8
         );
       };
       img.onerror = () => reject(new Error("Failed to load image."));
       img.src = event.target.result;
     };
     reader.onerror = () => reject(new Error("Failed to read file."));
     reader.readAsDataURL(file);
   });
 };


  const compressImage = (blob, maxSize) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let quality = 0.8; // Start with 80% quality
        let compressedBlob;

        const compress = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Failed to compress image."));
                return;
              }

              if (blob.size <= maxSize) {
                resolve(blob);
              } else {
                quality -= 0.1; // Reduce quality by 10%
                if (quality <= 0) {
                  reject(
                    new Error("Unable to compress image to the desired size.")
                  );
                } else {
                  compress(); // Try again with lower quality
                }
              }
            },
            blob.type,
            quality
          );
        };

        compress();
      };
      img.onerror = () => reject(new Error("Failed to load image."));
      img.src = URL.createObjectURL(blob);
    });
  };

  const handleClearImage = () => {
    setImage(null); // Clear the image
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {!image && (
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      )}

      {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="Preview"
            className="w-full h-auto rounded-lg shadow-sm"
          />
          <button
            type="button"
            onClick={handleClearImage}
            className="mt-2 w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Clear Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
