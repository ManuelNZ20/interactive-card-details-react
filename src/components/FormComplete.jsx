import thank from '../assets/images/icon-complete.svg'

export const FormComplete = () => {
  return (
    <div className="form-complete">
      <img src={thank} alt="" className="icon-complete" />
      <h3>THANK YOU!</h3>
      <p className="message-card-complete">We&apos;ve added your card details</p>
    </div>
  )
}
