package org.eclipse.jkube.demos.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.jkube.demos.model.Todo;

@ApplicationScoped
public class TodoRepository implements PanacheRepository<Todo> {
}
