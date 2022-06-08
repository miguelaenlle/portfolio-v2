const ProjectVideos: React.FC<{ embeds: string[] }> = (props) => {
  return (
    <div className = "space-y-4">
      {props.embeds.map((embed) => {
        return (
          <div className="rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg"
                src={`https://www.youtube.com/embed/${embed}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectVideos;
