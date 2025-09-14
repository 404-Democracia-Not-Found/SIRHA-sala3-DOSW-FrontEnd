
import javax.swing.*;
import java.awt.*;

public class RecuperarContrasena extends JFrame {
    private static class CenteredCardLayout extends JPanel {
        public CenteredCardLayout(JPanel card) {
            setLayout(new GridBagLayout());
            setBackground(new Color(245,245,245));
            add(card, new GridBagConstraints());
        }
    }

    public RecuperarContrasena() {
        setTitle("Recuperar Contraseña");
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        setExtendedState(java.awt.Frame.MAXIMIZED_BOTH);
        setResizable(true);

        JPanel card = new JPanel();
        card.setBackground(Color.WHITE);
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBorder(BorderFactory.createEmptyBorder(32, 32, 32, 32));

        
        ImageIcon logoIcon = new ImageIcon("SIRHA-sala3-DOSW-FrontEnd/src/images/Logo_Escuela.png");
        JLabel logoLabel = new JLabel();
        logoLabel.setIcon(new ImageIcon(logoIcon.getImage().getScaledInstance(90, 90, Image.SCALE_SMOOTH)));
        logoLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(logoLabel);
        card.add(Box.createRigidArea(new Dimension(0, 18)));

        
        JLabel title = new JLabel("Recuperar Contraseña");
        title.setFont(new Font("Segoe UI", Font.BOLD, 26));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(title);
        card.add(Box.createRigidArea(new Dimension(0, 8)));

        
        JLabel instruction = new JLabel("Ingresa tu correo institucional para recuperar tu contraseña");
        instruction.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        instruction.setForeground(new Color(120,120,130));
        instruction.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(instruction);
        card.add(Box.createRigidArea(new Dimension(0, 28)));

        
        JLabel emailLabel = new JLabel("Correo institucional");
        emailLabel.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        emailLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(emailLabel);

        JTextField emailField = new JTextField();
        emailField.setMaximumSize(new Dimension(400, 36));
        emailField.setPreferredSize(new Dimension(320, 36));
        emailField.setAlignmentX(Component.CENTER_ALIGNMENT);
        emailField.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        card.add(emailField);
        card.add(Box.createRigidArea(new Dimension(0, 18)));

        
        JButton enviarBtn = new JButton("Enviar");
        enviarBtn.setFont(new Font("Segoe UI", Font.BOLD, 18));
        enviarBtn.setBackground(new Color(161,0,0));
        enviarBtn.setForeground(Color.WHITE);
        enviarBtn.setFocusPainted(false);
        enviarBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        enviarBtn.setMaximumSize(new Dimension(220, 40));
        enviarBtn.setPreferredSize(new Dimension(180, 40));
        enviarBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(enviarBtn);
        card.add(Box.createRigidArea(new Dimension(0, 12)));

        
        JButton backBtn = new JButton("Atrás");
        backBtn.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        backBtn.setBackground(Color.WHITE);
        backBtn.setForeground(new Color(161,0,0));
        backBtn.setFocusPainted(false);
        backBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        backBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(Box.createRigidArea(new Dimension(0, 10)));
        card.add(backBtn);

        
        enviarBtn.addActionListener(e -> JOptionPane.showMessageDialog(this, "Si el correo existe, recibirás instrucciones para recuperar tu contraseña.", "Recuperar Contraseña", JOptionPane.INFORMATION_MESSAGE));
        backBtn.addActionListener(e -> this.dispose());

        setContentPane(new CenteredCardLayout(card));
    }
}
