import React from "react";

function HowToAdopt(props) {
  return (
    <div>
      {props.language === "pt-br" ? (
        <div>
          <p>
            Tome a decisão Pense na sua estrutura familiar, nas suas contas e se
            está pronto para adotar um animal. Lembre-se: eles são novos membros
            da família, necessitam de atenção e geram custos. Essa não é uma
            decisão simples!
          </p>
          <p>
            Escolha o pet Considere os animais que estão em tratamento, que
            possuem deficiências e que já foram muito rejeitados. Eles também
            merecem um lar! Que tal então dar uma chance?
          </p>
          <p>
            Prepare os documentos Encontre-nos em uma Feira de Adoção, ou entre
            em contato por e-mail para marcar um encontro conosco e conhecer o
            seu novo melhor amigo. Nós vamos te fazer algumas perguntas e pedir
            alguns documentos - esse é nosso procedimento padrão.
          </p>
          <p>
            Adotei... e agora!? Depois de assinar o termo de compromisso e fazer
            a foto oficial para registrar o momento, você precisa cuidar do seu
            novo amigo com muito carinho - isso inclui uma boa alimentação,
            visitas frequentes ao veterinário e colaborar com o nosso processo
            de pós-adoção.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Make the decision Think about your family structure, your accounts
            and is ready to adopt an animal. Remember: they are new members of
            family, need attention and generate costs. This is not a decision
            simple!
          </p>
          <p>
            Choose the pet Consider the animals that are being treated, that
            have deficiencies and which have already been largely rejected. They
            also deserve a home! How about taking a chance then?
          </p>
          <p>
            Prepare documents Find us at an Adoption Fair, or get in touch
            contact by email to arrange an appointment with us and meet your new
            best friend. We are going to ask you some questions and ask some
            documents - this is our standard procedure.
          </p>
          <p>
            I adopted ... what now !? After signing the commitment term and
            making the official photo to register the moment, you need to take
            care of your new friend with great affection - this includes good
            food, visits frequent visits to the veterinarian and collaborate
            with our post-adoption.
          </p>
        </div>
      )}
    </div>
  );
}

export default HowToAdopt;
