export const descriptionCode = (wheatherStatus?: number) => {
  switch (wheatherStatus) {
    case 0:
      return "Céu Limpo";
    case 1:
      return "Céu Parcialmente Limpo";
    case 2:
      return "Parcialmente nublado";
    case 3:
      return "Encoberto";
    case 45:
      return "Nevoeiro";
    case 48:
      return "Geada";
    case 51:
      return "Garoa Leve";
    case 53:
      return "Garoa Moderada";
    case 55:
      return "Garoa Intensa";
    case 56:
      return "Garoa Congelante Leve";
    case 57:
      return "Garoa Congelante Densa";
    case 61:
      return "Chuva Intensa Leve";
    case 63:
      return "Chuva Intensa Moderada";
    case 65:
      return "Chuva Intensa Forte";
    case 66:
      return "Chuva Congelante Leve";
    case 67:
      return "Chuva Congelante Forte";
    case 71:
      return "Queda de Neve Leve";
    case 73:
      return "Queda de Neve Moderada";
    case 75:
      return "Queda de Neve Forte";
    case 77:
      return "Grãos de Neve";
    case 80:
      return "Pancadas de Chuva Leves";
    case 81:
      return "Pancadas de Chuva Moderadas";
    case 82:
      return "Pancadas de Chuva Violentas";
    case 85:
      return "Aguaceiros de Neve Leves";
    case 86:
      return "Aguaceiros de Neve Fortes";
    case 95:
      return "Trovoadas";
    case 96:
      return "Trovoadas com Granizo Leve";
    case 99:
      return "Trovoadas com Granizo Forte";
    default:
      return "";
  }
};
