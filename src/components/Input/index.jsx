import { Container } from "./styles";

export function Input({
  type,
  placeholder,
  icon: Icon,
  label,
  value,
  ...rest
}) {
  return (
    <Container>
      {label}
      {Icon && <Icon />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  );
}
