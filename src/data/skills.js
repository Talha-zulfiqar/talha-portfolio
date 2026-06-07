import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiPostman,
  SiScikitlearn,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: FaHtml5, level: 96 },
      { name: 'CSS3', icon: FaCss3Alt, level: 94 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'React', icon: FaReact, level: 90 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 88 },
      { name: 'Express.js', icon: SiExpress, level: 84 },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: SiMongodb, level: 86 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
    ],
  },
  {
    title: 'Data Science',
    items: [
      { name: 'Python', icon: FaPython, level: 84 },
      { name: 'Pandas', icon: SiPandas, level: 82 },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 80 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 88 },
      { name: 'Docker', icon: FaDocker, level: 78 },
      { name: 'Postman', icon: SiPostman, level: 90 },
      { name: 'VS Code', icon: VscVscode, level: 96 },
    ],
  },
]