
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "College Education",
    period: "Currently Studying",
    description:
      "I am currently learning about programming, web development, databases, computer systems, and other areas of Information Technology. I continue to develop my technical knowledge and skills as I work toward completing my college education.",
    achievements: [
      "Currently pursuing a college degree",
      "Learning programming and web development",
      "Developing skills in database management",
      "Improving problem-solving and technical skills",
    ],
  },
  {
    degree: "Senior High School",
    institution: "Senior High School Education",
    period: "Graduated",
    description:
      "Successfully completed Senior High School education, gaining knowledge and skills that prepared me for college.",
    achievements: [
      "Completed Senior High School education",
      "Developed communication skills",
      "Prepared for higher education",
    ],
  },
  {
    degree: "Junior High School",
    institution: "Junior High School Education",
    period: "Graduated",
    description:
      "Successfully completed Junior High School education and developed my academic foundation.",
    achievements: [
      "Completed Junior High School education",
      "Improved academic knowledge",
      "Developed critical thinking skills",
    ],
  },
  {
    degree: "Elementary Education",
    institution: "Elementary School Education",
    period: "Graduated",
    description:
      "Completed elementary education, building the basic knowledge and learning skills that became the foundation of my education.",
    achievements: [
      "Completed Elementary education",
      "Built a strong academic foundation",
      "Developed basic learning skills",
    ],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Education
        </h1>

        <p className="text-muted-foreground mt-2">
          My educational journey has helped me develop my
          knowledge, skills, and interest in technology.
          I continue to learn and improve my skills as I
          work toward completing my college education.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">

        {educationList.map((item, idx) => (
          <Card key={idx} className="transition-all hover:shadow-lg">

            <CardHeader>
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  {/* Graduation Icon */}
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  {/* Education Details */}
                  <div>
                    <CardTitle className="text-xl">
                      {item.degree}
                    </CardTitle>

                    <CardDescription>
                      {item.institution}
                    </CardDescription>
                  </div>

                </div>

                {/* Education Status */}
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>

              </div>
            </CardHeader>

            <CardContent className="space-y-4">

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Key Highlights */}
              <div>

                <h2 className="text-sm font-semibold flex items-center gap-1.5 mb-2">

                  <Award className="h-4 w-4 text-primary" />

                  Key Highlights

                </h2>

                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">

                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}

                </ul>

              </div>

            </CardContent>

          </Card>
        ))}

      </div>

    </div>
  );
}
