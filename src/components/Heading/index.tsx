import * as S from './styles'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => <S.Heading>{title}</S.Heading>

export default Heading
