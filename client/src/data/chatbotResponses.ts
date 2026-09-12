export interface ChatbotResponse {
  keywords: string[];
  response: string;
  showEnquiry?: boolean;
}

export const chatbotResponses: ChatbotResponse[] = [
  {
  keywords: ["hi", "hello", "hey", "hii", "hiii", "how are you", "how are you doing"],
  response:
    "Hi! Welcome to DroneTV. How can I help you today? You can ask me about our services, courses, training, or registration.",
    showEnquiry: true,
},
  {
    keywords: ["service", "services", "What services does DroneTV provide?"],
    response:
      "DroneTV provides Agriculture Drones, Aerial Surveillance-24/7 and other professional drone services and technology solutions.",
      showEnquiry: false,
  },
  {
    keywords: ["course", "courses", "training","What courses / training are available"],
    response:
      "We offer drone pilot training, GIS and Mapping Specialist and other advanced drone training. You can submit an enquiry to learn about course details.",
      showEnquiry: false,
  },
  {
    keywords: ["contact", "phone", "email", "How can I contact DroneTV?"],
    response:
      "You can contact the DroneTV team through the contact section on this website. You can also submit an enquiry and our team can get back to you.",
      showEnquiry: true,
  },
  {
    keywords: ["register", "registration", "join","How can I register?"],
    response:
      "To register your interest, submit the enquiry form with your name, email, phone number, user type, and preferred course or service.",
      showEnquiry: true,
  },
  {
    keywords: ["student", "students", "I am a student"],
    response:
      "If you are a student interested in drone technology or training, we'd be happy to help. Please submit an enquiry and our team will reach you.",
      showEnquiry: true,
  },
  {
    keywords: ["interested", "service interest"],
    response:
      "Great! Please submit an enquiry with the service or course you're interested in, and our team can assist you.",
      showEnquiry: true,
  },
  {
    keywords: ["speak", "person", "someone", "team", "I want to speak with someone."],
    response:
      "Sure! Please submit your contact details through the enquiry form and our team can get in touch with you.",
      showEnquiry: true,
  },
];