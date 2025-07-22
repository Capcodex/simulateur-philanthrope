type Profil = {
  nom: string;
  description: string;
  structure: string;
  structureDetail: string;
};

const profils: Record<string, Profil> = {
  "stratège": {
    nom: "Le Stratège Discret",
    description: "Vous êtes animé par une vision de long terme, souvent familiale, parfois institutionnelle. Votre approche est réfléchie, patiente, discrète mais structurée. Vous voyez la philanthropie comme un levier d’impact durable, loin de la mise en lumière ou de l’effet immédiat.",
    structure: "Fonds de dotation",
    structureDetail:
      "Le fonds de dotation est un outil efficace pour financer durablement vos causes d’intérêt général, tout en conservant un haut niveau de discrétion et de simplicité administrative. Il est idéal pour un engagement structuré, sans surmédiatisation."
  },
  "mecene": {
    nom: "Le Mécène Passionné",
    description: "Vous soutenez des projets qui vous touchent profondément, souvent dans les arts ou la culture. Votre engagement est sensible, personnel, esthétique. Vous croyez que la beauté, l’émotion et le talent doivent rayonner.",
    structure: "Fondation abritée",
    structureDetail:
      "La fondation abritée vous permet de concentrer vos moyens dans un cadre sécurisé et professionnel, sans en gérer la lourdeur administrative. Elle offre visibilité et reconnaissance, tout en vous laissant une grande liberté dans le choix des projets."
  },
  "activiste": {
    nom: "L’Activiste Éthique",
    description: "Vous êtes mû par l’injustice ou les urgences sociales et environnementales. Votre engagement est visible, assumé, parfois militant. Pour vous, la philanthropie est un levier d’action directe, de transformation et d’exemplarité.",
    structure: "Association ou structure agile",
    structureDetail:
      "L’association ou la structure agile (type fonds de soutien ou coopérative) est parfaitement adaptée à un engagement rapide, visible et opérationnel. Elle vous donne la flexibilité nécessaire pour agir, mobiliser et communiquer efficacement."
  },
  "familial": {
    nom: "Le Bienfaiteur Familial",
    description: "Votre engagement est tourné vers la transmission, les racines, et l’accompagnement des générations futures. Vous souhaitez ancrer votre soutien dans une logique de proximité et de pérennité, à l’image de vos valeurs.",
    structure: "Fondation familiale ou donation temporaire",
    structureDetail:
      "La fondation familiale vous permet de structurer votre philanthropie sur plusieurs générations. Quant à la donation temporaire d’usufruit, elle combine impact immédiat et optimisation fiscale, dans une logique de don progressif."
  },
};

function identifierProfil(finalite: string, visibilite: string, temps: string, domaine: string): Profil {
  if (finalite === "societe" && temps === "long" && visibilite === "anonyme") return profils["stratège"];
  if (domaine === "culture" && finalite === "emotion" && visibilite === "maitrise") return profils["mecene"];
  if (domaine === "social" || domaine === "environnement") return profils["activiste"];
  if (finalite === "famille" || domaine === "jeunesse") return profils["familial"];
  return profils["stratège"];
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('philanthrope-form') as HTMLFormElement;
  const resultat = document.getElementById('resultat')!;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const finalite = (document.getElementById('finalite') as HTMLSelectElement).value;
    const domaine = (document.getElementById('domaine') as HTMLSelectElement).value;
    const visibilite = (document.getElementById('visibilite') as HTMLSelectElement).value;
    const temps = (document.getElementById('temps') as HTMLSelectElement).value;

    if (!finalite || !domaine || !visibilite || !temps) {
      resultat.innerHTML = `<p class="warning">Veuillez répondre à toutes les questions du simulateur.</p>`;
      return;
    }

    const profil = identifierProfil(finalite, visibilite, temps, domaine);

    resultat.innerHTML = `
      <div class="profil">
        <h2>🌟 Votre profil : <em>${profil.nom}</em></h2>
        <p>${profil.description}</p>
        <p><strong>Structure recommandée :</strong> ${profil.structure}</p>
        <p class="structure-detail">${profil.structureDetail}</p>
      </div>
    `;
  });
});
