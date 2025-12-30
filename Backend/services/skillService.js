function detectSkillGap(resumeText, roleSkills) {
  resumeText = resumeText.toLowerCase();
  const matched = [];
  const missing = [];

  roleSkills.forEach(skill => {
    if (resumeText.includes(skill.toLowerCase())) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  });

  return { matched, missing };
}

module.exports = { detectSkillGap };
