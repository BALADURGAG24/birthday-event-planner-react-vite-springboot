package com.java.birthday.service;

import com.java.birthday.model.Feedback;
import com.java.birthday.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback getFeedbackById(Long id) {
        return feedbackRepository.findById(id).orElse(null);
    }

    public Feedback updateFeedback(Long id, Feedback updatedFeedback) {
        Feedback existingFeedback = feedbackRepository.findById(id).orElse(null);
        if (existingFeedback != null) {
            existingFeedback.setName(updatedFeedback.getName());
            existingFeedback.setEmail(updatedFeedback.getEmail());
            existingFeedback.setMobileNumber(updatedFeedback.getMobileNumber());
            existingFeedback.setLocation(updatedFeedback.getLocation());
            existingFeedback.setMessage(updatedFeedback.getMessage());
            return feedbackRepository.save(existingFeedback);
        }
        return null;
    }

    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}