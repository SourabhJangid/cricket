package com.qjob.cricket.repository;

import com.qjob.cricket.Model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
