import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(({ notification }) => {
    return notification
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const displayNotification = () => {
    if (notification !== '') {
      return (
        <div style={style}>
          {notification}
        </div>
      )
    }
  }
  return (
    displayNotification()
  )
}

export default Notification