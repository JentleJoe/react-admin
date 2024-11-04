import { Header } from "../../components";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "../../theme/ThemeContext";

const Faq = () => {
   const { theme } = useTheme()
   
   const faqs = [
    {
        question: 'What is an Admin Dashboard',
        answer: `An admin dashboard is like a control center for managing a website or app.
        It helps you track important info, make changes, and keep things running smoothly all
        in one place without having to write any code!`,
    },
    {
        question: 'What is JavaScript',
        answer: `JavaScript is a programming language that helps make websites interactive.
        It is what lets buttons, forms, animations, and other parts of a website respond when
        you click, type, or scroll. JavaScript brings websites to life!`,
    },
    {
        question: 'What is React',
        answer: `React is a JavaScript framework. It is used to build websites
        or applications that updates automatically without having to refresh the whole page`,
    },
    {
        question: 'What is a Framework',
        answer: `A  framework is a collection of ready-made tools and rules that helps developers
        build software more quickly and easily`,
    },
    {
        question: 'What are Dependencies',
        answer: `Dependencies are the extra tools or packages that a project depends on to work
        properly. Using dependencies prevents you from having to build everything from scratch by
        using ready-made tools built by other developers.`,
    },
   ]

  return (
    <div>
        <Header title="FAQ" subtitle='Frequently Asked Questions Page' />
        {
            faqs.map((faq, index) => (
                <div key={index} className="mb-[1px]">
                    <Accordion sx={theme.accordion} key={index}>
                        <AccordionSummary expandIcon={<ExpandMore />} 
                        sx={theme.accordionSummary}>
                            <h5 className={` text-[#3B9F8A]`}>{faq.question}</h5>
                        </AccordionSummary>
                        <AccordionDetails sx={theme.accordionDetails}>
                            <p>{faq.answer}</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))
        }
    </div>
  )
}

export default Faq