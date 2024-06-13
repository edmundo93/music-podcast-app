import PodcastDetail from './podcast-detail/podcast-detail'
import './podcast-layout.css'

interface IProps {
  children: React.ReactNode
  params: { id: string }
}

const PodcastLayout = (props: IProps) => {
  return (
    <div className="layout">
      <aside>
        <PodcastDetail podcastId={props.params?.id} />
      </aside>
      <div>{props.children}</div>
    </div>
  )
}

export default PodcastLayout
