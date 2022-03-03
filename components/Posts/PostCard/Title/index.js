const Title = (props) => {
  const Tag = props.level ? `h${ props.level }` : 'div';

  return (
    <Tag className={'text-ellipsis line-clamp-2 ' + props.className ?? ''}>
      { props.text || props.children }
    </Tag>
  );
}

export default Title;
