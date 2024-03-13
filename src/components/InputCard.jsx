import PropTypes from 'prop-types'
import '../styles/input-card.css'

export const InputCard = ({idFor,placeholder,onValueCard,name,maxLength}) => {
  return (
    <input
      className='input-card'
      id={idFor}
      placeholder={placeholder}
      name={name}
      onChange={onValueCard}
      maxLength={maxLength}
    />
  )
};

InputCard.propTypes = {
  idFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onValueCard: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
}
