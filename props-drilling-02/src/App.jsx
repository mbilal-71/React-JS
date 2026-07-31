import React from 'react'
import Card from "./assets/components/card";


// const arr = [10,20,30]

const jobOpenings = [
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Miami, USA"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "London, UK"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX////U4O85fcDC0+jL2eshc7zm7fUpdr24zOQ+gMEueL3r8fetw+BMh8Qxer7y9fqNrtZnlspZjseFqdOWtdnd5vIAZbb4+vyjvd0AargSb7pvm8x9pNGyyOMAX7R4oNCPUL5VAAADf0lEQVR4nO2Y2XakIBCGbTdcwbZ16DZt+v3fcpBFWew5E83FTM7/5SLhLygrWCBFFAEAAAAAAAAAAAAAAAAAAAAAAADgu5gbnzuPWKgK5jQ3o0bPwiyP4911dyCoklQev1g0xr4oiduu1v/K5BimxPL4ylx3B4JqaezxEEGVvqigZCr4MqrIHL26WhPljZ0OBJWHRBHfUTergO2qkmDsgaD+SS4BKY94qFqIF1j72mj8hUMPBEWnzONT5FTlixYPsZ7mhydSE1XjWz4PBLWb6PmbRNeIRCeelJmVf/X9PQ4ElQSI9cVC1e4glkcgpsod3+v9gzArvN5VzXa9LnauBWfl1++koxSkXIhfjtpRqdJGt9NKtstK79+sLTfijyXUMbOl56mg5okukA9HvWVSzdagVJtOej9kcUVXKrKs/SHbFErOBXXpBsnsqIUSB53D0ah7dbrNB5tu6XZ3JNfdj4AzBXdU9oZ3HXgonCHpr5LOUQetuvTrxsM/lKJ/Xe9R7wrDqaDmKZbJ6iU6oSHkttpZqaS2kwlf9YlyUw6Zcncu0fdn6r43U/ftnawzddG2l56gov+OmQJ/S/q8SdxD/qxVB2vv4Z2Supx1W4fnPUr0wCY6g9jRlzN+uKMHtQMlW6IwVV7Q+BK91vKDiiKi0e7OJXrR9pKbow5adYnNBh/xq5bGKN26Xtnqrgse9BV4rWCOyupdtk5G4duf0rzv7kcwNrMkcdRUqY05fue6l8lfPmvEualuTMNyl0ZnEAUvET+Zn+gVIaSaTBDJtHQiZDu6LC1CqDi05C3ZXDSTHJi5x7MvB0VieZxzvdwqqVZrUOaQp2eAtdIel8tU3uSJMM4WW6PdnVt9tV+9SXKtmlMtu3iCaTPLBX/r7n8nDUhEhRyqNmISnbZc+uP2p2NN/vz8XVRe2EyiGG190YaK3bayBfmaZFlBpc+G2O4OBFVmxGO5n6K+aDENS9luCVReF9R9RiaV2o1tPXI/VQTM4lgbqhbiFeWzJyxTJYaqzWK0rT+metj5uO2rlnX7uq3fPunKlM48HPA1+tanEokeqoqSqOvFpLRVvR8NRN9Fzba1OhBUWfmlgbqIDUsGcUIqn/r5xWTpsY4lNc9vLCs9chU0dD5PHtWBuDAk6xZ9udkG8y00W1JqW899awAAAAAAAAAAAAAAAAAAAAAAAABg8xtaA2KnmYSL0wAAAABJRU5ErkJggg==",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "New York, USA"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "GPU Programmer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Lhr, Pak"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card location={elem.location} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />y
        </div>
      })}
    </div>
  )
}

export default App