import { Header } from "../../components";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "../../theme/ThemeContext";

const Faq = () => {
   const { theme } = useTheme()
   
   const faqs = [
    {
        question: 'What is an Admin Dashboard',
        answer: `Lorem ipsum dolor sit amet, consetetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget`,
    },
    {
        question: 'What is JavaScript',
        answer: `Lorem ipsum dolor sit amet, consetetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget`,
    },
    {
        question: 'What is React',
        answer: `Lorem ipsum dolor sit amet, consetetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget`,
    },
    {
        question: 'Who are you',
        answer: `Lorem ipsum dolor sit amet, consetetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget`,
    },
    {
        question: 'What are you skills',
        answer: `Lorem ipsum dolor sit amet, consetetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget`,
    },
   ]

  return (
    <div>
        <Header title="FAQ" subtitle='Frequently Asked Questions Page' />

        {
            faqs.map((faq, index) => (
                <Accordion defaultExpanded sx={theme.accordion} key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />} 
                    sx={theme.accordionSummary}>
                        <h5 className={` text-[#3B9F8A]`}>{faq.question}</h5>
                    </AccordionSummary>
                    <AccordionDetails sx={theme.accordionDetails}>
                        <p>{faq.answer}</p>
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </div>
  )
}

export default Faq