import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../reusables/buttons/Buttons";
import { Textinput } from "../inputs/Textinput";
import { largeFormOptions } from "../index";
import { useLocalState } from "@/app/[id]/LocalStateProvider";
import { useGlobalState } from "@/app/GlobalStateProvider";
import {
  AddLeadClient,
  AddLeadOpposer,
  AddMatterClient,
  AddMatterOpposer,
  CreateFileMatter,
  CreateFirmLead,
} from "../../../functions/Posts";
import { toast } from "react-toastify";

const LargeFormModal = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  disabled,
  clickedTitle,
  buttonValue,
  subChildren,
  formType = "firm",
}) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [formStep, setFormStep] = useState(1); // Track form step
  const { loading, setLoading } = useLocalState();
  const { access } = useGlobalState();
  const [id, setId] = useState(null);

  const [form, setForm] = useState({
    matter: {
      email: { label: "Email", value: "", type: "text" },
      name: { label: "Name", value: "", type: "text" },
      file_number: { label: "File Number", value: "", type: "text" },
      subject_matter: { label: "Subject Matter", value: "", type: "text" },
      case_type: { label: "Case Type", value: "", type: "text" },
      source_of_retainer: {
        label: "Source of Retainer",
        value: "",
        type: "text",
      },
      physical_property: {
        label: "Physical Property",
        value: "",
        type: "text",
      },
      payment_instruction: {
        label: "Payment Method",
        value: "",
        type: "text",
      },
      bill_method: {
        label: "Bill Method",
        value: "", // Selected value
        options: largeFormOptions.billMethod, // Dropdown options
        type: "dropdown",
      },
      contract_signed: {
        label: "Contract Signed",
        value: "", // Selected value
        options: largeFormOptions.contractSigned, // Dropdown options
        type: "dropdown",
      },
      status: {
        label: "Status",
        value: "", // Selected value
        options: largeFormOptions.status, // Dropdown options
        type: "dropdown",
      },
      fees: { label: "Fee", value: "", type: "number" },
      // contingency_percentage: {
      //   label: "Contingency Percentage",
      //   value: "",
      //   type: "number",
      // },
    },
    clientDetails: [
      {
        name: { label: "Name", value: "", type: "text" },
        date_of_birth: { label: "Date of Birth", value: "", type: "date" },
        email: { label: "Email", value: "", type: "text" },
        phone_number: { label: "Phone Number", value: "", type: "phone" },
        address: { label: "Address", value: "", type: "text" },
        state: { label: "State", value: "", type: "text" },
        city: { label: "City", value: "", type: "text" },
        postal_code: { label: "Postal Code", value: "", type: "number" },
      },
    ],
    otherPartiesDetails: [
      {
        name: { label: "Name", value: "", type: "text" },
        role: { label: "Role", value: "", type: "text" },
        address: { label: "Address", value: "", type: "text" },
        phone_number: { label: "Phone Number", value: "", type: "phone" },
      },
    ],
  });

  useEffect(() => {
    const { bill_method } = form.matter;

    if (bill_method.value === "C") {
      // Remove the fees field and ensure contingency_percentage is present
      const { fees, ...restMatter } = form.matter;
      setForm((prevForm) => ({
        ...prevForm,
        matter: {
          ...restMatter,
          contingency_percentage: {
            label: "Contingency Percentage",
            value: "",
            type: "number",
          },
        },
      }));
    } else {
      // Remove the contingency_percentage field and ensure fees is present
      const { contingency_percentage, ...restMatter } = form.matter;
      setForm((prevForm) => ({
        ...prevForm,
        matter: {
          ...restMatter,
          fees: { label: "Fee", value: "", type: "number" },
        },
      }));
    }
  }, [form.matter.bill_method.value]);

  useEffect(() => {
    console.log(form.matter);
  }, [form.matter]);

  const handleChange = (section, index, key, value) => {
    const updatedForm = { ...form };

    if (section === "matter") {
      // For dropdown fields, update only the value
      if (updatedForm[section][key].type === "dropdown") {
        updatedForm[section][key].value = value; // Update selected value
      } else {
        // If the field type is "phone" and the value doesn't start with "+", prepend it
        if (
          updatedForm[section][key].type === "phone" &&
          !value.startsWith("+")
        ) {
          updatedForm[section][key].value = `+${value}`;
        } else {
          updatedForm[section][key].value = value; // Update value for non-dropdown fields
        }
      }
    } else {
      // If the field type is "phone" and the value doesn't start with "+", prepend it
      if (
        updatedForm[section][index][key].type === "phone" &&
        !value.startsWith("+")
      ) {
        updatedForm[section][index][key].value = `+${value}`;
      } else {
        updatedForm[section][index][key].value = value; // Update value for nested fields
      }
    }

    setForm(updatedForm);
  };

  const handleAddMore = (section) => {
    const defaultFields = {
      clientDetails: {
        name: { label: "Name", value: "", type: "text" },
        date_of_birth: { label: "Date of Birth", value: "", type: "date" },
        email: { label: "Email", value: "", type: "text" },
        phone_number: { label: "Phone Number", value: "", type: "phone" },
        address: { label: "Address", value: "", type: "text" },
        state: { label: "State", value: "", type: "text" },
        city: { label: "City", value: "", type: "text" },
        postal_code: { label: "Postal Code", value: "", type: "number" },
      },
      otherPartiesDetails: {
        name: { label: "Name", value: "", type: "text" },
        role: { label: "Role", value: "", type: "text" },
        address: { label: "Address", value: "", type: "text" },
        phone_number: { label: "Phone Number", value: "", type: "phone" },
      },
    };

    setForm((prevForm) => ({
      ...prevForm,
      [section]: [...prevForm[section], defaultFields[section]],
    }));
  };

  const handleRemoveLast = (section) => {
    setForm((prevForm) => {
      if (prevForm[section].length > 1) {
        return {
          ...prevForm,
          [section]: prevForm[section].slice(0, -1), // Remove the last item
        };
      }
      return prevForm;
    });
  };

  const validateFields = (section, index = null) => {
    const fields = index !== null ? form[section][index] : form[section];
    for (const key in fields) {
      if (fields[key].value === "") {
        toast.warn(`Please fill in the ${fields[key].label} field.`);
        return false;
      }
    }
    return true;
  };

  const checkForDuplicates = (section) => {
    const details = form[section];

    // Check if details is defined and is an array
    if (!Array.isArray(details)) {
      console.error(`Invalid ${section}: Expected an array.`);
      return false;
    }

    const seen = new Set();
    for (const detail of details) {
      // Ensure detail is defined and has the required properties
      if (!detail || !detail.name || !detail.email) {
        console.warn(`Invalid entry in ${section}: Missing name or email.`);
        continue; // Skip this entry
      }

      // Ensure name and email have value properties
      const nameValue = detail.name.value || "";
      const emailValue = detail.email.value || "";

      const key = `${nameValue}-${emailValue}`;
      if (seen.has(key)) {
        toast.warn(`Duplicate name and email found in ${section}.`);
        return false;
      }
      seen.add(key);
    }
    return true;
  };

  const PostDetails = async () => {
    if (!validateFields("matter")) return;

    setLoading("posting_matter_details");
    const matterDetails = {};

    // Safely extract matter details
    if (form.matter) {
      Object.entries(form.matter).forEach(([key, field]) => {
        if (field && field.value !== undefined) {
          matterDetails[key] = field.value;
        }
      });
    }

    console.log("Matter Details:", matterDetails);

    try {
      let res;
      if (formType === "firm") {
        res = await CreateFirmLead(access, matterDetails);
        toast.success("Lead created successfully");
      } else if (formType === "matter") {
        res = await CreateFileMatter(access, matterDetails);
        toast.success("Matter created successfully");
      }

      // Check if the response contains a valid integer ID
      if (res?.id && Number.isInteger(res.id)) {
        setId(res.id); // Update the ID only if it's a valid integer
      } else {
        console.warn("Invalid or missing ID in response:", res?.id);
      }

      refetchData(2); // Move to the next step
    } catch (error) {
      console.error("PostDetails Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";
      if (formType === "firm") {
        toast.error(`Failed to create Lead: ${errorMessage}`);
      } else if (formType === "matter") {
        toast.error(`Failed to create file matter: ${errorMessage}`);
      }
    } finally {
      setLoading(null);
    }
  };

  const refetchData = async (step) => {
    try {
      await onSubmit(); // Assuming this is necessary for your flow
      setFormStep(step); // Move to the next step
    } catch (error) {
      console.error("Refetch Error:", error);
      toast.error(`Error fetching data`);
    }
  };

  const PostClientDetails = async () => {
    if (!checkForDuplicates("clientDetails")) return;

    setLoading("posting_matter_client");

    const clientDetails = form.clientDetails.map((client) => {
      const details = {};
      Object.entries(client).forEach(([key, field]) => {
        details[key] = field.value;
      });
      return details;
    });

    try {
      let res;
      if (formType === "firm") {
        res = await AddLeadClient(access, clientDetails.at(-1), id);
        toast.success("Client's Details added to lead");
      } else if (formType === "matter") {
        res = await AddMatterClient(access, clientDetails.at(-1), id);
        toast.success("Client's Details added to file matter");
      }

      // Check if the response contains a valid integer ID
      if (res?.id && Number.isInteger(res.id)) {
        setId(res.id); // Update the ID only if it's a valid integer
      } else {
        console.warn("Invalid or missing ID in response:", res?.id);
      }

      refetchData(3); // Move to the next step (Other Parties Details)
    } catch (error) {
      console.error("PostDetails Error:", error);

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";

      // Check if the error response status is 400
      if (error.response?.status === 400) {
        toast.warn("Duplicate details already exist."); // Show warning toast for 400 status
      } else {
        // Handle other errors
        if (formType === "firm") {
          toast.error(`Failed to add client details to lead: ${errorMessage}`);
        } else if (formType === "matter") {
          toast.error(
            `Failed to add client details to file matter: ${errorMessage}`
          );
        }
      }

      // Log the status code for debugging
      console.log("Error Status Code:", error.response?.status);
    } finally {
      setLoading(null);
    }
  };

  const PostOtherPartiesDetails = async () => {
    if (!checkForDuplicates("otherPartiesDetails")) return;

    setLoading("posting_matter_others");

    // Ensure otherPartiesDetails is defined and has at least one entry
    if (!form.otherPartiesDetails || form.otherPartiesDetails.length === 0) {
      toast.warn("No other parties details to post.");
      return;
    }

    const otherPartiesDetails = form.otherPartiesDetails.map((party) => {
      const details = {};
      Object.entries(party).forEach(([key, field]) => {
        // Ensure field is defined before accessing its value
        if (field && field.value !== undefined) {
          details[key] = field.value;
        } else {
          console.warn(`Field ${key} is undefined or missing a value.`);
        }
      });
      return details;
    });

    console.log("Other Parties Details:", otherPartiesDetails);

    try {
      let res;
      if (formType === "firm") {
        res = await AddLeadOpposer(access, otherPartiesDetails.at(-1), id);
        toast.success("Other party's Details added to lead");
      } else if (formType === "matter") {
        res = await AddMatterOpposer(access, otherPartiesDetails.at(-1), id);
        toast.success("Other party's Details added to file matter");
      }

      // Check if the response contains a valid integer ID
      if (res?.id && Number.isInteger(res.id)) {
        setId(res.id); // Update the ID only if it's a valid integer
      } else {
        console.warn("Invalid or missing ID in response:", res?.id);
      }

      refetchData(3); // Move to the next step (Other Parties Details)
    } catch (error) {
      console.error("PostDetails Error:", error);

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";

      // Check if the error response status is 400
      if (error.response?.status === 400) {
        toast.warn("Duplicate details already exist."); // Show warning toast for 400 status
      } else {
        // Handle other errors
        if (formType === "firm") {
          toast.error(
            `Failed to add other party's details to lead: ${errorMessage}`
          );
        } else if (formType === "matter") {
          toast.error(
            `Failed to add other party's details to file matter: ${errorMessage}`
          );
        }
      }
    } finally {
      setLoading(null); // Reset loading state
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50 px-4 text-customGray"
      onClick={handleOutsideClick}
    >
      <div className="card rounded-lg p-6 shadow-lg w-full h-auto max-h-screen overflow-auto max-w-4xl bg-white relative">
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>

        {title && (
          <h2 onClick={clickedTitle} className="text-2xl font-semibold mb-4">
            {title}
          </h2>
        )}

        <div className="flex flex-col gap-y-4">
          {/* Step 1: Matter Details */}
          {formStep === 1 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Matter Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(form.matter).map(([key, field]) => (
                  <Textinput
                    key={key}
                    label={field.label}
                    value={field.value}
                    type={field.type}
                    className="border-b"
                    labelStyle="card"
                    changed={(value) =>
                      handleChange("matter", null, key, value)
                    }
                    placeholder={field.label}
                    tag={key}
                    options={
                      field.type === "dropdown" ? field.options : undefined
                    } // Pass options for dropdown
                  />
                ))}
              </div>
              <Button
                loading={loading === "posting_matter_details"}
                disabled={loading === "posting_matter_details"}
                type="button"
                className="mt-4 btn rounded-full"
                onClick={() => {
                  PostDetails(); // Log matter details
                }}
                Submit
                and
                Continue
                text={`Submit and Continue`}
              />
            </div>
          )}

          {/* Step 2: Client Details */}
          {formStep === 2 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Client Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {form.clientDetails.map((client, index) => (
                  <React.Fragment key={index}>
                    {Object.entries(client).map(([key, field]) => (
                      <Textinput
                        key={key}
                        label={field.label}
                        value={field.value}
                        type={field.type} // Use "tel" for phone numbers
                        className="border-b"
                        changed={(value) =>
                          handleChange("clientDetails", index, key, value)
                        }
                        placeholder={field.label}
                        tag={key}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full flex flex-row justify-between">
                <button
                  type="button"
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => {
                    if (
                      validateFields(
                        "clientDetails",
                        form.clientDetails.length - 1
                      )
                    ) {
                      handleAddMore("clientDetails");
                      PostClientDetails(); // Post the previously filled data set
                    }
                  }}
                >
                  Add More
                </button>
                {form.clientDetails.length > 1 && (
                  <button
                    type="button"
                    className="mt-2 text-red-500 hover:underline"
                    onClick={() => handleRemoveLast("clientDetails")}
                  >
                    Remove Last
                  </button>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <Button
                  type="button"
                  className="btn rounded-full"
                  onClick={() => setFormStep(1)}
                  text={`Previous`}
                />
                <Button
                  loading={loading === "posting_matter_client"}
                  disabled={loading === "posting_matter_client"}
                  type="button"
                  className="btn rounded-full"
                  onClick={() => {
                    if (
                      validateFields(
                        "clientDetails",
                        form.clientDetails.length - 1
                      )
                    ) {
                      PostClientDetails(); // Log client details
                    }
                  }}
                  text={`Next`}
                />
              </div>
            </div>
          )}

          {/* Step 3: Other Parties Details */}
          {formStep === 3 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">
                Other Parties Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {form.otherPartiesDetails.map((party, index) => (
                  <React.Fragment key={index}>
                    {Object.entries(party).map(([key, field]) => (
                      <Textinput
                        key={key}
                        label={field.label}
                        value={field.value}
                        type={field.type} // Use "tel" for phone numbers
                        className="border-b"
                        changed={(value) =>
                          handleChange("otherPartiesDetails", index, key, value)
                        }
                        placeholder={field.label}
                        tag={key}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full flex flex-row justify-between">
                <button
                  type="button"
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => {
                    if (
                      validateFields(
                        "otherPartiesDetails",
                        form.otherPartiesDetails.length - 1
                      )
                    ) {
                      handleAddMore("otherPartiesDetails");
                      PostOtherPartiesDetails(); // Post the previously filled data set
                    }
                  }}
                >
                  Add More
                </button>
                {form.otherPartiesDetails.length > 1 && (
                  <button
                    type="button"
                    className="mt-2 text-red-500 hover:underline"
                    onClick={() => handleRemoveLast("otherPartiesDetails")}
                  >
                    Remove Last
                  </button>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="btn rounded-full"
                  onClick={() => setFormStep(2)}
                >
                  Previous
                </button>
                <Button
                  className="btn"
                  text={buttonValue}
                  disabled={disabled === "posting_matter_others"}
                  loading={loading === "posting_matter_others"}
                  onClick={() => {
                    if (
                      validateFields(
                        "otherPartiesDetails",
                        form.otherPartiesDetails.length - 1
                      )
                    ) {
                      PostOtherPartiesDetails(); // Log other parties details
                    }
                  }}
                />
              </div>
            </div>
          )}

          {subChildren && subChildren}
        </div>
      </div>
    </div>
  );
};

export default LargeFormModal;
