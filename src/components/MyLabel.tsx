import "./mylabel.css";

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si quiere texto capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores basicos del boton
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Selecciona un color para la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "no label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor,
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
