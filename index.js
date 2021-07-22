const questions = [
  'what have i learned today?',
  'What made me upset? And what could I do to improve?',
  'What made me happy today?',
  'How many people did I help today?'
]

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
    WOOW!

    What you learned today was:
    ${answers[0]}

    What annoyed you and you could improve was:
    ${answers[1]}

    What made you happy today was:
    ${answers[2]}

    Today you helped ${answers[3]} people!!

    Come back tomorrow for further reflections!
  `)
})
