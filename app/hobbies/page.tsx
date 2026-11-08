
const hobbies = [
  {
    title: "Gaming",
    icon: "🎮",
    description:
      "Enjoying different types of video games for entertainment, relaxation, and fun during my free time.",
  },
  {
    title: "Listening to Music",
    icon: "🎧",
    description:
      "Listening to different genres of music to relax, improve my mood, and enjoy my favorite songs.",
  },
  {
    title: "Watching Movies",
    icon: "🎬",
    description:
      "Watching movies of different genres, especially action, comedy, adventure, and science fiction.",
  },
  {
    title: "Traveling",
    icon: "✈️",
    description:
      "Exploring new places, experiencing different environments, and creating memorable experiences.",
  },
  {
    title: "Riding Motorcycle",
    icon: "🏍️",
    description:
      "Enjoying motorcycle rides, discovering new destinations, and experiencing the freedom of traveling on the road.",
  },
  {
    title: "Fitness",
    icon: "💪",
    description:
      "Staying active, maintaining a healthy lifestyle, and improving physical strength through regular exercise.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Hobbies & Interests
        </h1>

        <p className="text-muted-foreground mt-2">
          Activities that reflect my personality, interests,
          and the things I enjoy doing during my free time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {hobbies.map((hobby) => {
          return (
            <div
              key={hobby.title}
              className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >

              <div className="flex flex-col space-y-1.5 p-6">

                <div className="flex items-center gap-3">

                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">

                    <span
                      className="text-2xl"
                      aria-hidden="true"
                    >
                      {hobby.icon}
                    </span>

                  </div>

                  <h2 className="font-semibold leading-none tracking-tight text-lg">
                    {hobby.title}
                  </h2>

                </div>

              </div>

              <div className="p-6 pt-0">

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
