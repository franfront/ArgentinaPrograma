
package com.portfolio.demo.Security.Repository;

import com.portfolio.demo.Security.Entity.Rol;
import com.portfolio.demo.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Franco
 */

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer>{
    
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
    
    
}
