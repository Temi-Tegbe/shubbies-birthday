import Landing    from './components/Landing'
import Journey    from './components/Journey'
import Passions   from './components/Passions'
import Reasons    from './components/Reasons'
import Music      from './components/Music'
import Photos     from './components/Photos'
import Messages   from './components/Messages'
import GiftReveal from './components/GiftReveal'
import Closing    from './components/Closing'
import NavDots    from './components/NavDots'

export default function App() {
  return (
    <>
      <NavDots />
      <Landing />
      <Journey />
      <Passions />
      <Reasons />
      <Music />
      <Photos />
      <Messages />
      <GiftReveal />
      <Closing />
    </>
  )
}
