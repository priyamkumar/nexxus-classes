import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Course {
  title: string;
  description: string;
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card interactive className="group h-full">
      <CardHeader>
        <CardTitle className="text-base md:text-lg">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <img
          src="/education-course-illustration.jpg"
          alt=""
          className="w-full rounded-md border border-border transition-transform duration-200 group-hover:scale-[1.02]"
        />
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </CardContent>
    </Card>
  );
}
