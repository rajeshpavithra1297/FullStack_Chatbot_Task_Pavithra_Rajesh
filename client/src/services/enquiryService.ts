export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  userType: string;
  interest: string;
  message: string;
  status?:string;
}

export const submitEnquiry = async (
  formData: EnquiryData
) => {
  const response = await fetch(
    "http://localhost:5000/api/enquiries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to submit enquiry"
    );
  }

  return data;
};

export const getEnquiries = async () => {
  const response = await fetch(
    "http://localhost:5000/api/enquiries"
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch enquiries"
    );
  }

  return data.enquiries;
};

export const getEnquiryById = async (
  id: string
) => {
  const response = await fetch(
    `http://localhost:5000/api/enquiries/${id}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch enquiry"
    );
  }

  return data.enquiry;
};

export const updateEnquiryStatus = async (
  id: string,
  status: string
) => {
  const response = await fetch(
    `http://localhost:5000/api/enquiries/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update enquiry"
    );
  }

  return data.enquiry;
};

export const deleteEnquiry = async (
  id: string
) => {
  const response = await fetch(
    `http://localhost:5000/api/enquiries/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete enquiry"
    );
  }

  return data;
};