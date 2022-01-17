package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table( name = "Todo")  // 데이터 베이스의 Todo 테이블과 매핑, name 을 명시하지 않으면 @Entity의 이름을 테이블 이름으로 간주
public class TodoEntity {
    @Id // pk
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id; // 이 오브젝트의 아이디
    private String userId; // 이 오브젝트가 생성한 사용자의 아이디
    private String title; // Todo 타이틀
    private boolean done;

    /*
    * 하나의 엔티티 인스턴스는 데이터베이스 테이블의 한 행에 해당한다.
    * 엔티티 클래스는 클래스 그 자체가 테이블을 정의 해야한다. ORM 이 엔티티를 보고 어떤 필드에 매핑해야 하는지 알 수 있어야 한다는 뜻이다.
    * 자바 클래스를 엔티티로 정의할 떄 주의할 점
    * 1. 클래스에는 매개변수가 없는 생성자가 필요하다.
    * 2. Getter/Setter 가 필요하다.
    * 3. 기본 키 (Primary key)를 지정해 줘야 한다.
    * */
}
