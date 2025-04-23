import { z } from "zod"

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  gender: z.enum(["MALE", "FEMALE", "OTHER", "PREFER_NOT_TO_SAY"], {
    required_error: "Please select a gender.",
  }),
  phone: z.string().length(10, { message: "Phone number must be exactly 10 digits." }),
  nationality: z.string().min(2, { message: "Nationality is required." }),
  refugeeStatus: z.boolean().default(false),
  refugeeId: z.string().optional(),
  nationalId: z.string().optional(),

  hasDisability: z.boolean().default(false),
  disabilityType: z
    .enum([
      "PHYSICAL_IMPAIRMENT",
      "VISUAL_IMPAIRMENT",
      "HEARING_IMPAIRMENT",
      "MENTAL_IMPAIRMENT",
      "SHORT_STATURE",
      "ALBINISM",
      "DEAF_BLIND",
      "AUTISM",
      "MULTIPLE_DISABILITIES",
    ])
    .optional(),
  disabilityDetails: z.string().optional(),

  residence: z.string().min(2, { message: "Residence is required." }),
  emergencyContactName: z.string().min(2, { message: "Emergency contact name is required." }),
  emergencyContactRelation: z.string().min(2, { message: "Relationship is required." }),
  emergencyContactPhone: z.string().min(10, { message: "Emergency contact phone is required." }),

  hasYoungChild: z.boolean().default(false),
  hasChildcareSupport: z.boolean().optional(),

  hasLaptop: z.boolean().default(false),
  currentOccupation: z.enum(["STUDENT", "EMPLOYED", "UNEMPLOYED", "FREELANCER", "ENTREPRENEUR", "OTHER"], {
    required_error: "Please select your current occupation.",
  }),

  educationBackground: z.enum(
    [
      "HIGH_SCHOOL",
      "TECHNICAL_SCHOOL",
      "YEAR_1_UNIVERSITY",
      "YEAR_2_UNIVERSITY",
      "YEAR_3_UNIVERSITY",
      "YEAR_4_UNIVERSITY",
      "FINAL_YEAR_UNIVERSITY",
      "BACHELORS",
      "MASTERS",
      "PHD",
      "OTHER",
    ],
    {
      required_error: "Please select your education background.",
    },
  ),
  university: z.string().optional(),
  academicBackground: z.string().min(2, { message: "Academic background is required." }),
  englishProficiency: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "FLUENT", "NATIVE"], {
    required_error: "Please select your English proficiency.",
  }),

  linkedInProfile: z.string().url({ message: "Please enter a valid LinkedIn URL." }).optional().or(z.literal("")),
  githubProfile: z.string().url({ message: "Please enter a valid GitHub URL." }).optional().or(z.literal("")),

  howDidYouKnow: z.enum(
    ["SOCIAL_MEDIA", "FRIENDS", "ALUMNI", "WEBSITE", "SCHOOL", "NEWSPAPER", "RADIO", "TV", "EVENT", "OTHER"],
    {
      required_error: "Please select how you heard about us.",
    },
  ),
  motivation: z.string().min(50, { message: "Motivation must be at least 50 characters." }),
  additionalFeedback: z.string().optional(),

  courseId: z.string({
    required_error: "Please select a course.",
  }),
})
