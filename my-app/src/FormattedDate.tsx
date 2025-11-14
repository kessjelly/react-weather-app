type FormattedDateProps = {
  date?: Date;
};

export default function FormattedDate({ date }: FormattedDateProps) {
  if (!date) return null; 
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];
  let hours: string | number = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes: string | number = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <>
      {day}, {hours}:{minutes}
    </>
  );
}