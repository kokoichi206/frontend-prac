const Text = (props: { content: string }) => {
  const { content } = props;
  return <p className="text">{content}</p>;
};

const Message = (props: {}) => {
  const content1 = "PARENT!!!";
  const content2 = "CHILD!!!";

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  );
};

export default Message;
