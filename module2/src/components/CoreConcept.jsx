export default function CoreConcept({ image , title = "default text",  description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

//the thing is simple the -- react essentials advanced will be finished on 14 dec