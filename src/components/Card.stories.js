import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const Default = () => Card('A short text')
export const LongText = () => Card('This is an example of a long.')
