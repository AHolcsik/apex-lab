import dummydata from "../dummydata.json";

const Monitor = () => {
  // console.log(dummydata);

  return (
    <div className="container my-4">
      <div>
        {dummydata.map((d) => (
          <p
            style={{
              fontSize: "small",
              background: `#${d.flag ? d.flag : ""}`,
            }}
          >
            <b>Type: </b>
            {d.TYPE},<b> M: </b>
            {d.M},<b> FSYM: </b>
            {d.FSYM},<b> TSYM: </b>
            {d.TSYM},<b> SIDE: </b>
            {d.SIDE},<b> Action: </b>
            {d.ACTION},<b> CCSEQ: </b>
            {d.CCSEQ},<b> Price: </b>
            {d.P},<b> Quantity: </b>
            {d.Q},<b> SEQ: </b>
            {d.SEQ},<b> REPORTEDNS: </b>
            {d.REPORTEDNS},<b> DELAYNS: </b>
            {d.DELAYNS}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Monitor;
