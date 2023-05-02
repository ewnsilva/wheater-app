export const descriptionCode = (wheatherStatus?: number) => {
  switch (wheatherStatus) {
    case 0:
      return "Céu Limpo";
      break;
    case 1:
      return "Céu Parcialmente Limpo";
      break;
    case 2:
      return "Parcialmente nublado";
      break;
    case 3:
      return "Encoberto";
      break;
    case 45:
      return "Nevoeiro";
      break;
    case 48:
      return "Geada";
      break;
    case 51:
      return "Garoa Leve";
      break;
    case 53:
      return "Garoa Moderada";
      break;
    case 55:
      return "Garoa Intensa";
      break;
    case 56:
      return "Garoa Congelante Leve";
      break;
    case 57:
      return "Garoa Congelante Densa";
      break;
    case 61:
      return "Chuva Intensa Leve";
      break;
    case 63:
      return "Chuva Intensa Moderada";
      break;
    case 65:
      return "Chuva Intensa Forte";
      break;
    case 66:
      return "Chuva Congelante Leve";
      break;
    case 67:
      return "Chuva Congelante Forte";
      break;
    case 71:
      return "Queda de Neve Leve";
      break;
    case 73:
      return "Queda de Neve Moderada";
      break;
    case 75:
      return "Queda de Neve Forte";
      break;
    case 77:
      return "Grãos de Neve";
      break;
    case 80:
      return "Pancadas de Chuva Leves";
      break;
    case 81:
      return "Pancadas de Chuva Moderadas";
      break;
    case 82:
      return "Pancadas de Chuva Violentas";
      break;
    case 85:
      return "Aguaceiros de Neve Leves";
      break;
    case 86:
      return "Aguaceiros de Neve Fortes";
      break;
    case 95:
      return "Trovoadas";
      break;
    case 96:
      return "Trovoadas com Granizo Leve";
      break;
    case 99:
      return "Trovoadas com Granizo Forte";
      break;
    default:
      return "";
      break;
  }
};
