import dayjs from 'dayjs';
import localizedFormat from "dayjs/plugin/localizedFormat";
import ItemATQ from '../Components/Common/AnswerToQuestion/ItemATQ';

const encode = require( 'hashcode' ).hashCode;

dayjs.extend(localizedFormat);


export const isAuthenticated = () =>{
    return localStorage.getItem('token');
}

export const convertDate = (date) =>{
    return dayjs(date).format('llll');
}

const TagTheme = [
  { theme: "magenta", color: "#c41d7f" },
  { theme: "red", color: "#cf1322" },
  { theme: "volcano", color: "#d4380d" },
  { theme: "orange", color: "#d46b08" },
  { theme: "gold", color: "#d48806" },
  { theme: "lime", color: "#7cb305" },
  { theme: "green", color: "#389e0d" },
  { theme: "cyan", color: "#08979c" },
  { theme: "blue", color: "#096dd9" },
  { theme: "geekblue", color: "#1d39c4" },
  { theme: "purple", color: "#531dab" },
];

export const TagThemeAlea = (string) => {
    let max = TagTheme.length;
    //let randomInt=Math.floor(Math.random() * max);
    const hash = encode().value(string); 
    const hashInt=Math.abs(hash % max);
    return TagTheme[hashInt];
}

export const CommentsList = (comments) => {
    comments = comments ? comments : [];
    const list = comments.map((comment)=>{
        return {
            author: comment.author.username,
            avatar: `https://secure.gravatar.com/avatar/${comment.author._id}?s=164&d=identicon`,
            content: <p>{comment.body}</p>,
            datetime: convertDate(comment.created),
        }
    })
    return list;
}

export const AnswersList = (answers) => {
  return Array.isArray(answers) && answers.length ? (answers.map((answer)=>{
        const {body, _id, author, created} = answer;
        return {
          content: (
            <ItemATQ
              value={body}
              user={author}
              datetime={convertDate(created)}
              answer={answer}
            />
          ),
          _id
        };
    })) : [];
}