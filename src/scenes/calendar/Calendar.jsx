import { useState } from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction";
import { Header } from "../../components"
import { useTheme } from "../../theme/ThemeContext";
import { formatDate } from "@fullcalendar/core/index.js";

const Calendar = () => {
    const { theme } = useTheme()
    const [currentEvents, setCurrentEvents] = useState([])

    const colors = theme.palette
    
    const handleDateClick = (selected) => {
        console.log("Selected:\n", selected)

        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = (selected) => {
        if (
            window.confirm(`Are you sure you want to delete event '${selected.title}' ?`)
        )
        {
            selected.event.remove()
        }
    }

  return (
    <div>
        <Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />
        <div className="flex justify-between">
            <div className="min-w-[80px] md:mr-5 mr-3 max-[500px]:p-1 lg:p-4 p-2 rounded-[4px]
            flex flex-col items-center max-w-[15vw]" style={theme.calendarSidebar}>
                {/* CALENDAR SIDEBAR */}
                <h3 className="font-medium max-sm:text-sm mb-4">Events</h3>
                {
                    currentEvents.map((event) => (
                        <div key={event.id} className="max-[500px]:text-[8px] max-sm:text-xs sm:text-sm md:text-base flex flex-wrap items-center mb-2  rounded-sm bg-[#4cceac] p-2">
                            <h4>{event.title}</h4>
                            <p>
                            {
                                formatDate(event.start, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })
                            }
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="w-full">
                <FullCalendar
                    height="75vh"
                    plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                    ]}
                    headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                    {
                        id: "12315",
                        title: "All-day event",
                        date: "2024-09-14",
                    },
                    {
                        id: "5123",
                        title: "Timed event",
                        date: "2024-09-28",
                    },
                    ]}
                    // eventBackgroundColor={colors.primary[400]}
                    // eventBorderColor={colors.primary[500]}
                    eventTextColor={"white"}
                />
            </div>
        </div>
    </div>
  )
}

export default Calendar