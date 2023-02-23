import diggletLoading from '../image/diggletLoading.gif'

const Loading = () => {
  return (
    <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '24px'}}>
    <img src={diggletLoading} alt="diggletLoading" />
    Loading...
    </div>
  </div>
  )
}

export default Loading