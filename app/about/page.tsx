
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "Next.js",
  "CSS",
  "Node.js",
  "MySQL / Oracle",
  "Python",
  "Git & GitHub",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-2">
          A bit about my background, passions, and technical skills.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
          Hello! I'm Keth Bibay, a college student who is passionate about technology, computers, and web development. I enjoy learning new things, exploring different technologies, and improving my programming skills. I am interested in creating websits, working with databases, and discovering how technology can solve everyday problems.

          </p>
          <p>
            In my free time I enjoy playing online games, listening, watching movies/series, riding motorcycle.
          My goal is to continue improving my skills, gain more experience, and become a IT professional in the future. 
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
