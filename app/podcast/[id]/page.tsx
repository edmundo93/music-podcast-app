interface IProps {
  params: { id: string }
  searchParams: any
}

const PodcastList = (props: IProps) => {
  return <h1>PODCAST LIST {`${props.params.id}`}</h1>
}

export default PodcastList
