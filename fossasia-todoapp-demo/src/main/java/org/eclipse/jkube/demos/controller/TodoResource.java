package org.eclipse.jkube.demos.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.jkube.demos.model.Todo;
import org.eclipse.jkube.demos.repository.TodoRepository;

import java.util.List;

@Path("/todos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TodoResource {

    @Inject
    TodoRepository todoRepository;

    @GET
    public List<Todo> listTodos() {
        return todoRepository.listAll();
    }

    @POST
    @Transactional
    public Response addTodo(Todo todo) {
        todoRepository.persist(todo);
        return Response.status(Response.Status.CREATED).entity(todo).build();
    }
}

