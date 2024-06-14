import PodcastDetail from '@app-components/podcast-detail/podcast-detail'
import './podcast-layout.css'

interface IProps {
  children: React.ReactNode
  params: { id: string }
}

const PodcastLayout = (props: IProps) => {
  return (
    <div className="podcast-layout">
      <aside className="podcast-sidebar">
        <PodcastDetail podcastId={props.params?.id} />
      </aside>
      <main className="podcast-content">{props.children}</main>
    </div>
  )
}

export default PodcastLayout
