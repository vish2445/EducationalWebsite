const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "sujaldummy0602@gmail.com",
        pass: "xbkx tmcf kaoy vnxr",
      },
      secure: false,
    })

    let info = await transporter.sendMail({
      from: `"Studynotion" <sujaldummy0602@gmail.com>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
