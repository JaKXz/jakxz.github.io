export async function load({ data }) {
  const [technical, experience, openSource, education] = await Promise.all([
    import("./technical.md"),
    import("./experience.md"),
    import("./open-source.md"),
    import("./education.md"),
  ]);

  return {
    ...data,
    TechnicalContent: technical.default,
    ExperienceContent: experience.default,
    OpenSourceContent: openSource.default,
    EducationContent: education.default,
  };
}
