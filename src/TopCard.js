import Card from '@mui/material/Card';

export function TopCard() {
  const cards = [
    {
      title: "EARNINGS (MONTHLY)",
      value: "$40,000"
    },

    {
      title: "EARNINGS (MONTHLY)",
      value: "$215,000"
    },

    {
      title: "Task",
      value: "50%"
    },

    {
      title: "PENDING REQUESTS",
      value: "18"
    },
  ];
  return (
    <div className='top-card'>
        {cards.map(({title,value})=>(
          <CardLayout title={title} value={value}/>
        ))}
    </div>
  );
}

function CardLayout({title ,value}) {
    return(
        <div className="card">
            <Card>
                <div className='card-contain'>
                    <p className='card-title'>{title}</p>
                    <h4>{value}</h4>
                </div>
            </Card>
        </div>
    )
    
}