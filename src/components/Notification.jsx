import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { notificationRemoving } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
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
      setTimeout(function() {
        dispatch(notificationRemoving())
      }, 5000)

      return (
        <div style={style}>
          you voted &lsquo;{notification}&rsquo;
        </div>
      )
    }
  }
  return (
    displayNotification()
  )
}

export default Notification