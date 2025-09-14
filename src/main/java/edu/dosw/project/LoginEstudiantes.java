
import javax.swing.*;
import java.awt.*;

public class LoginEstudiantes extends JFrame {
    private static class CenteredCardLayout extends JPanel {
        public CenteredCardLayout(JPanel card) {
            setLayout(new GridBagLayout());
            setBackground(new Color(245,245,245));
            add(card, new GridBagConstraints());
        }
    }

    public LoginEstudiantes() {
        setTitle("Login Estudiantes");
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        setExtendedState(java.awt.Frame.MAXIMIZED_BOTH);
        setResizable(true);

        // Panel principal blanco (card)
        JPanel card = new JPanel();
        card.setBackground(Color.WHITE);
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBorder(BorderFactory.createEmptyBorder(32, 32, 32, 32));

        // Logo
        ImageIcon logoIcon = new ImageIcon("SIRHA-sala3-DOSW-FrontEnd/src/images/Logo_Escuela.png");
        JLabel logoLabel = new JLabel();
        logoLabel.setIcon(new ImageIcon(logoIcon.getImage().getScaledInstance(90, 90, Image.SCALE_SMOOTH)));
        logoLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(logoLabel);
        card.add(Box.createRigidArea(new Dimension(0, 18)));

        // Título
        JLabel title = new JLabel("Ingreso Estudiantes");
        title.setFont(new Font("Segoe UI", Font.BOLD, 26));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(title);
        card.add(Box.createRigidArea(new Dimension(0, 8)));

        // Subtítulo
        JLabel subtitle = new JLabel("Por favor ingresa tus credenciales");
        subtitle.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        subtitle.setForeground(new Color(120,120,130));
        subtitle.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(subtitle);
        card.add(Box.createRigidArea(new Dimension(0, 28)));

        // Usuario
        JLabel userLabel = new JLabel("Usuario institucional");
        userLabel.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        userLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(userLabel);

        JTextField userField = new JTextField();
        userField.setMaximumSize(new Dimension(400, 36));
        userField.setPreferredSize(new Dimension(320, 36));
        userField.setAlignmentX(Component.CENTER_ALIGNMENT);
        userField.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        card.add(userField);
        card.add(Box.createRigidArea(new Dimension(0, 18)));

        // Contraseña
        JLabel passLabel = new JLabel("Contraseña");
        passLabel.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        passLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(passLabel);

        JPasswordField passField = new JPasswordField();
        passField.setMaximumSize(new Dimension(400, 36));
        passField.setPreferredSize(new Dimension(320, 36));
        passField.setAlignmentX(Component.CENTER_ALIGNMENT);
        passField.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        card.add(passField);
        card.add(Box.createRigidArea(new Dimension(0, 18)));

        // Botón Ingresar
        JButton ingresarBtn = new JButton("Ingresar");
        ingresarBtn.setFont(new Font("Segoe UI", Font.BOLD, 18));
        ingresarBtn.setBackground(new Color(161,0,0));
        ingresarBtn.setForeground(Color.WHITE);
        ingresarBtn.setFocusPainted(false);
        ingresarBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        ingresarBtn.setMaximumSize(new Dimension(220, 40));
        ingresarBtn.setPreferredSize(new Dimension(180, 40));
        ingresarBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(ingresarBtn);
        card.add(Box.createRigidArea(new Dimension(0, 12)));

        // Botón Olvidé mi contraseña
        JButton forgotBtn = new JButton("¿Olvidaste tu contraseña?");
        forgotBtn.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        forgotBtn.setForeground(new Color(120,120,130));
        forgotBtn.setBackground(Color.WHITE);
        forgotBtn.setBorderPainted(false);
        forgotBtn.setFocusPainted(false);
        forgotBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        forgotBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(forgotBtn);
        card.add(Box.createVerticalGlue());

        // Botón Atrás
        JButton backBtn = new JButton("Atrás");
        backBtn.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        backBtn.setBackground(Color.WHITE);
        backBtn.setForeground(new Color(161,0,0));
        backBtn.setFocusPainted(false);
        backBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        backBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(Box.createRigidArea(new Dimension(0, 10)));
        card.add(backBtn);

        // Acciones de los botones
        ingresarBtn.addActionListener(e -> JOptionPane.showMessageDialog(this, "Bienvenido, estudiante!", "Login Exitoso", JOptionPane.INFORMATION_MESSAGE));
    forgotBtn.addActionListener(e -> new RecuperarContrasena().setVisible(true));
        backBtn.addActionListener(e -> {
            this.dispose();
            new PantallaSeleccionRol().setVisible(true);
        });

        setContentPane(new CenteredCardLayout(card));
    }
}
