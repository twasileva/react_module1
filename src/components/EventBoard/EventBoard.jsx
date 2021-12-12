import css from './EventBoard.module.css'
import PropTypes from 'prop-types'
import { EventCard } from 'components/EventCard/EventCard'

export const EventBord = ({events}) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCard
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  )
}

EventBord.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time:PropTypes.exact({
    start: PropTypes.string.isRequired,
    end:PropTypes.string.isRequired,
  }),
}