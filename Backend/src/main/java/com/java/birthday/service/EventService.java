package com.java.birthday.service;


import com.java.birthday.model.Event;
import com.java.birthday.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(int id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event updateEvent(int id, Event updatedEvent) {
        Event existingEvent = eventRepository.findById(id).orElse(null);
        if (existingEvent != null) {
            existingEvent.setEventName(updatedEvent.getEventName());
            existingEvent.setApplicantName(updatedEvent.getApplicantName());
            existingEvent.setApplicantAddress(updatedEvent.getApplicantAddress());
            existingEvent.setApplicantMobile(updatedEvent.getApplicantMobile());
            existingEvent.setApplicantEmail(updatedEvent.getApplicantEmail());
            existingEvent.setEventAddress(updatedEvent.getEventAddress());
            existingEvent.setEventDate(updatedEvent.getEventDate());
            existingEvent.setEventTime(updatedEvent.getEventTime());
            existingEvent.setEventMenuId(updatedEvent.getEventMenuId());
            existingEvent.setAddonId(updatedEvent.getAddonId());
            existingEvent.setEventCost(updatedEvent.getEventCost());
            return eventRepository.save(existingEvent);
        }
        return null;
    }

    public void deleteEvent(int id) {
        eventRepository.deleteById(id);
    }
}
