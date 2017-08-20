const timings = [
  '00:02:17,440 --> 00:02:20,375',
  '00:02:17,440 --> 00:02:20,375',
  '00:02:17,440 --> 00:02:20,375',
  '00:02:17,440 --> 00:02:20,375',
  '00:02:17,440 --> 00:02:20,375',
  '00:02:17,440 --> 00:02:20,375',
];

function transformSubs(subs) {
  const srtlines = Object.keys(subs)
    .map((line, index) => {
      console.log(`
${index + 1}
${timings[index]}
${subs[line]}`);
      return line;
    });
  return srtlines;
}

module.exports = { transformSubs };
